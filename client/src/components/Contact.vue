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
          <div class="form-item">
            <label for="name" class="required">{{ $t("fields.name") }}</label>
            <input type="text" name="name" id="name" v-model="name" />
            <small class="form-invalid-msg" v-if="errors['name']">{{
              errors["name"][0]
            }}</small>
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
    subject: "",
    message: "",
  }),
  methods: {
    sendEmail() {
      const mail = document.createElement("a");
      mail.href = `mailto:juanpmachadob@gmail.com?subject=${this.subject} - ${this.name}&body=${encodeURIComponent(this.message)}`;
      mail.click();
    },
    checkForm() {
      this.errors = {
        name: [],
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

      let checkName = () => {
        let name = this.name;
        checkRequired(name, "name");
      };

      let checkSubject = () => {
        let subject = this.subject;
        checkRequired(subject, "subject");
      };

      let checkMessage = () => {
        let message = this.message;
        checkRequired(message, "message");
      };

      checkName();
      checkSubject();
      checkMessage();

      if (
        !this.errors["name"][0] &&
        !this.errors["subject"][0] &&
        !this.errors["message"][0]
      ) {
        this.sendEmail();
      }
    },
  },
};
</script>