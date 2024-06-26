<template>
    <q-page class="flex flex-center">
        <q-card class="contact-card">
            <q-card-section>
                <div class="text-h6">Contact Me</div>
            </q-card-section>
            <q-card-section>
                <q-form @submit.prevent="sendEmail" class="contact-form">
                    <q-input v-model="form.name" label="Name" outlined dense required />
                    <q-input v-model="form.email" label="Email" type="email" outlined dense required />
                    <q-input v-model="form.message" label="Message" type="textarea" outlined dense required />
                    <q-btn type="submit" label="Send" color="primary" class="full-width" />
                </q-form>
            </q-card-section>
            <q-card-section v-if="feedbackMessage">
                <q-banner dense :color="feedbackColor">
                    {{ feedbackMessage }}
                </q-banner>
            </q-card-section>
        </q-card>
    </q-page>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
    name: 'ContactPage',
    data() {
        return {
            form: {
                name: '',
                email: '',
                message: ''
            },
            feedbackMessage: '',
            feedbackColor: 'primary'
        };
    },
    methods: {
        sendEmail() {
            const serviceID = 'service_y34uj0e';
            const templateID = 'template_nn9syjd';
            const publicKey = 'KBQv61U0R_aP3rb3J'; // Votre clé publique

            const templateParams = {
                from_name: this.form.name,
                reply_to: this.form.email,
                message: this.form.message
            };

            emailjs.send(serviceID, templateID, templateParams, publicKey)
                .then(() => {
                    this.feedbackMessage = 'Your message has been sent successfully!';
                    this.feedbackColor = 'green';
                    this.resetForm();
                })
                .catch((error) => {
                    console.error('Failed to send message', error);
                    this.feedbackMessage = 'Failed to send your message. Please try again later.';
                    this.feedbackColor = 'red';
                });
        },
        resetForm() {
            this.form.name = '';
            this.form.email = '';
            this.form.message = '';
        }
    }
}
</script>

<style scoped>
.contact-card {
    max-width: 800px;
    width: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    padding: 16px;
    margin: 16px;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.full-width {
    width: 100%;
}

/* Responsive styles */
@media (max-width: 600px) {
    .contact-card {
        padding: 12px;
    }

    .contact-form {
        gap: 12px;
    }
}

@media (max-width: 400px) {
    .contact-card {
        padding: 8px;
    }

    .contact-form {
        gap: 8px;
    }
}
</style>