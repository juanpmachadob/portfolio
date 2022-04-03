<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2 class="separator center">{{ $t("navigation.contact") }}</h2>
      <p class="center">
        {{ $t("contact.text") }}
      </p>
      <div class="contact-container">
        <div class="contact-info">
          <i class="fa-solid fa-address-book"></i>
          <h3>{{ $t("contact.information.title") }}</h3>
          <p>
            {{ $t("contact.information.text") }}
          </p>
        </div>
        <form class="form" @submit.prevent="checkForm()">
          <div class="form-50">
            <div class="form-item">
              <label for="name" class="required">{{ $t("fields.name") }}</label>
              <input type="text" name="name" id="name" v-model="name" />
              <small class="form-invalid-msg" v-if="errors['name']">{{
                errors["name"][0]
              }}</small>
            </div>
            <div class="form-item">
              <label for="email" class="required">{{
                $t("fields.email")
              }}</label>
              <input type="email" name="email" id="email" v-model="email" />
              <small class="form-invalid-msg" v-if="errors['email']">{{
                errors["email"][0]
              }}</small>
            </div>
          </div>
          <div class="form-item">
            <label for="subject" class="required">{{
              $t("fields.subject")
            }}</label>
            <input type="text" name="subject" id="subject" v-model="subject" />
            <small class="form-invalid-msg" v-if="errors['subject']">{{
              errors["subject"][0]
            }}</small>
          </div>
          <div class="form-item">
            <label for="message" class="required">{{
              $t("fields.message")
            }}</label>
            <textarea
              name="message"
              id="message"
              maxlength="400"
              v-model="message"
            ></textarea>
            <small class="form-invalid-msg" v-if="errors['message']">{{
              errors["message"][0]
            }}</small>
          </div>
          <input
            type="submit"
            class="btn btn-primary"
            :value="$t('contact.send')"
          />
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
  data: () => ({
    errors: {},
    name: "",
    email: "",
    subject: "",
    message: "",
  }),
  methods: {
    sendEmail() {
      const data = {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message,
      };

      fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.ok) {
          this.$swal({
            icon: "success",
            title: this.$t("validations.email-send"),
          });
          this.name = null;
          this.email = null;
          this.subject = null;
          this.message = null;
        } else {
          this.$swal({
            icon: "error",
            title: this.$t("validations.error"),
            text: this.$t("validations.email-not-send"),
          });
        }
      });
    },
    checkForm() {
      this.$swal({
        title: this.$t("validations.sending"),
        text: this.$t("validations.please-wait"),
        allowEscapeKey: false,
        allowOutsideClick: false,
      });
      this.$swal.showLoading();

      this.errors = {
        name: [],
        email: [],
        subject: [],
        message: [],
      };

      let checkRequired = (fieldValue, fieldName) => {
        if (!fieldValue) {
          this.errors[fieldName].push(
            this.$tc("validations.required", {
              field: this.$t(`fields.${fieldName}`),
            })
          );
        }
      };

      let checkMaxLength = (fieldValue, length, fieldName) => {
        if (fieldValue && fieldValue.length > length) {
          this.errors[fieldName].push(
            this.$tc("validations.max-length", {
              field: this.$t(`fields.${fieldName}`),
              n: length,
            })
          );
        }
      };

      let checkMinLength = (fieldValue, length, fieldName) => {
        if (fieldValue && fieldValue.length < length) {
          this.errors[fieldName].push(
            this.$tc("validations.min-length", {
              field: this.$t(`fields.${fieldName}`),
              n: length,
            })
          );
        }
      };

      let checkEmailValidation = (fieldValue, fieldName) => {
        const regex =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regex.test(fieldValue)) {
          this.errors[fieldName].push(
            this.$tc("validations.email", {
              field: this.$t(`fields.${fieldName}`),
            })
          );
        }
      };

      let checkName = () => {
        let name = this.name;
        checkRequired(name, "name");
        checkMinLength(name, 2, "name");
        checkMaxLength(name, 45, "name");
      };

      let checkEmail = () => {
        let email = this.email;
        checkRequired(email, "email");
        checkEmailValidation(email, "email");
        checkMaxLength(email, 76, "email");
      };

      let checkSubject = () => {
        let subject = this.subject;
        checkRequired(subject, "subject");
        checkMinLength(subject, 10, "subject");
        checkMaxLength(subject, 100, "subject");
      };

      let checkMessage = () => {
        let message = this.message;
        checkRequired(message, "message");
        checkMinLength(message, 20, "message");
        checkMaxLength(message, 600, "message");
      };

      checkName();
      checkEmail();
      checkSubject();
      checkMessage();

      if (
        !this.errors["name"][0] &&
        !this.errors["email"][0] &&
        !this.errors["subject"][0] &&
        !this.errors["message"][0]
      ) {
        this.sendEmail();
      } else {
        this.$swal({
          icon: "error",
          title: this.$t("validations.error"),
          text: this.$t("validations.please-validate"),
        });
      }
    },
  },
};
</script>