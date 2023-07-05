
<template>
    <div class="container-fluid">
        <div class="row ">
            <div class="w-80" style="width: 85%;">
                <RouterLink to="/" class="navbar-brand p-2 mt-3">
                    <h3><b>CareFinder</b></h3>
                </RouterLink>
            </div>
            <div class="row" style="width: 15%;">
                <img src="../assets/images/pexels-godisable-jacob-718978-fotor-2023062243215.png" alt="" srcset=""
                    class="rounded-circle mt-3" style="width: 100px; height: 100px;">
            </div>
        </div>
        <CustomAlert v-if="showAlert" @close="showAlert = false">
            Hospitals data saved successfully!
        </CustomAlert>
        <div class="container mt-5">
            <div>
                <h2>Hospital Entries</h2>
                <p>Create hospital entries and corresponding details that you would like to provide</p>
            </div>
            <div class="row justify-content-center h-100 pt-5">

                <div class="input-section col-sm-4 border">
                    <textarea v-model="markdownContent" @input="handleInput" placeholder="Enter Markdown content"
                        class="w-100"></textarea>
                </div>
                <div class="output-section col-sm-4 w-100 border">
                    <div v-html="renderedMarkdown"></div>
                </div>
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-primary btn-lg align-items-center mt-5 px-5 fw-md" @click="saveInfo">
                    Save
                </button>
            </div>
        </div>
    </div>
    <div class="container-fluid mt-5 ">
        <div v-if="entry.length > 0" class="m-5">
            <h3>Saved Entries</h3>
            <ul class="row">
                <li v-for="item in entry" :key="item.id" class="card col-sm-4 m-3 border-0 ">
                    <strong>ID:</strong> {{ item.id }}
                    <br>
                    <strong>Hospital Details:</strong> {{ item.data.content }}
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import CustomAlert from '@/components/CustomAlert.vue'
import MarkdownIt from 'markdown-it';
import { ref, onMounted } from 'vue';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

const convertMarkdownToHTML = (markdown: string): string => {
    const md = new MarkdownIt();
    return md.render(markdown);
};
const showAlert = ref(false);
const markdownContent = ref('# Hello, There!');
const renderedMarkdown = ref('');
const db = getFirestore();
const entry = ref([]);


const saveInfo = async () => {
    try {
        const entry = { content: markdownContent.value }; // Create an entry object with the content

        const docRef = await addDoc(collection(db, 'Entries'), entry);
        alert('Your Entry has been saved');
        showAlert.value = true;
    } catch (error) {
        console.error('Error saving Entries:', error);
        alert(error);
    }
};

const handleInput = () => {
    renderedMarkdown.value = convertMarkdownToHTML(markdownContent.value);
};



const fetchSavedInfo = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, 'Entries'));
        entry.value = querySnapshot.docs.map((doc) => {
            return {
                id: doc.id, // Store the document ID
                data: doc.data(),
            };
        });
    } catch (error) {
        console.error('Error fetching saved info:', error);
        alert(error);
    }
};

onMounted(() => {
    renderedMarkdown.value = convertMarkdownToHTML(markdownContent.value);
    fetchSavedInfo();
});
</script>
  
  
<style scoped>
.markdown-editor {
    display: flex;
}

.input-section {
    flex: 1;
    padding: 10px;
    max-width: 100%;
    max-height: 600px;
    overflow: auto;
}

.output-section {
    flex: 1;
    padding: 10px;
    max-width: 100%;
    max-height: 600px;
    overflow: auto;
}
</style>
  