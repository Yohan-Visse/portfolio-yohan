<template>
    <q-page class="flex flex-center q-pa-md q-gutter-md">
        <div class="title-container">
            <div class="title">Welcome to My Portfolio</div>
        </div>
        <q-card bordered class="my-card">
            <q-card-section>
                <div class="text-subtitle1">Here is my CV:</div>
                <iframe src="/cv.pdf" width="100%" height="500px" style="border: none;"></iframe>
            </q-card-section>
            <q-card-section>
                <q-btn color="blue" label="Download CV" @click="downloadCV" />
            </q-card-section>
        </q-card>
    </q-page>
</template>

<script>
export default {
    name: 'HomePage',
    methods: {
        downloadCV() {
            const link = document.createElement('a');
            link.href = '/cv.pdf';
            link.download = 'cv.pdf';
            link.click();
        }
    }
};
</script>

<style scoped>
.title-container {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
}

.title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-top: 20px;
}

.my-card {
    width: 80%;
    max-width: 800px;
    text-align: center;
    margin-top: 50px;
}
</style>
