<template>
    <footer class="footer">
        <div class="footer-column">
            <h3>MaoStudio.ro</h3>
            <p>
            <p>&copy; {{ new Date().getFullYear() }} <a href="#" class="primary-color">Mao Studio</a>. Toate
                drepturile rezervate.</p>
            </p>
        </div>
        <div class="footer-column">
            <h3>Despre</h3>
            <p>Suntem o echipă specializată în aranjarea și îngrijirea părului și a bărbii, oferim servicii
                personalizate pentru bărbați..</p>
        </div>
        <div class="footer-column">
            <h3>Contact</h3>
            <p><i class="bi bi-telephone-fill me-1"></i> 0722 669 299</p>
            <p><i class="bi bi-envelope-fill me-1"></i> contact@maostudio.ro</p>
        </div>
        <div class="footer-column footer-message">
            <h3>Trimite mesaj</h3>
            <form @submit.prevent="sendMessage">
                <input type="text" v-model="message" placeholder="Mesajul tău" />
                <button type="submit">Trimite</button>
            </form>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            message: '',
        };
    },
    methods: {
        sendMessage() {
            alert(`Mesaj trimis: ${this.message}`);
            this.message = '';
        },
    },
};
</script>

<style scoped>
.footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: #111;
    color: white;
    padding: 20px;
    padding-top: 50px;
    padding-bottom: 50px;
}

.footer-column {
    flex: 1 1 200px;
    margin: 10px;
    min-width: 200px;
}

.footer-column h3 {
    margin-bottom: 10px;
}

.footer-column p {
    margin: 0;
}

.footer-message form {
    display: flex;
    flex-direction: column;
}

.footer-message input {
    margin-bottom: 10px;
    padding: 5px;
}

.footer-message button {
    padding: 5px;
    background-color: #555;
    color: white;
    border: none;
    cursor: pointer;
}

.footer-message button:hover {
    background-color: #777;
}

/* Responsive Styles */
@media (max-width: 600px) {
    .footer-column {
        flex: 1 1 100%;
        /* Full width on small screens */
        margin: 5px 0;
    }
}
</style>