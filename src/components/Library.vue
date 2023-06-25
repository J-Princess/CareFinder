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
        <div class="text-center">
            <h4>My Library</h4>
            <p>Book Appointment to visit saved hospitals</p>
        </div>
        <div class="row">
            <div class="col-9">
                <div class="container-fluid">

                    <div v-if="isActive">
                        <div v-for="hospital in hospitals" :key="hospital.id" class="list-group-item"
                            style="border-radius: 10px; margin-top: 25px;  background: #E0E4EC;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ">
                            <!-- Display hospital information here -->
                            <img src="../assets/images/hospital.png" style="width: 20px;"><span>
                                <h6 class="text-center">{{ hospital.data.name }}</h6>
                                <p class="text-center">{{ hospital.data.vicinity }}</p>
                            </span>
                        </div>
                    </div>
                    <div v-else>
                        <div class="text-center mt-5">

                            <p>You have not saved any Hospital.</p>
                            <p>Proceed to <RouterLink to="/hospit">Find hospitals </RouterLink>and save them
                            </p>
                            <p>And if you have, wait a while, yours hospitals are being fetched</p>
                        </div>
                    </div>

                </div>

            </div>
            <div class="col-3">
                <div class="">

                    <div v-for="hospital in hospitals" :key="hospital.id" class="list-group-item py-3"
                        style="border-radius: 10px; margin-top: 28px;  background: #E0E4EC; ">
                        <div class="py-3 ">
                            <img src="../assets/images/Vector2.png" alt="" srcset="" class="mx-3 btn"
                                @click="exportToCSV(hospital)" style="width: 20%; height: 60%;">
                            <img src="../assets/images/Vector3.png" alt="" srcset="" class="mx-4 btn" @click="notAvail"
                                style="width: 20%; height: 60%;">
                            <img src="../assets/images/Vector4.png" alt="" srcset="" class="mx-3 btn"
                                @click="deleteHospital(hospital.id)" style="width: 20%; height: 60%;">
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template> 

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getFirestore, getDocs, collection, doc, deleteDoc } from 'firebase/firestore';
import CustomAlert from './CustomAlert.vue';
// import { db } from 'firebase/firestore';

const isActive = ref(false);
const hospitals = ref([]);
const db = getFirestore();

const notAvail = () => {
    alert("Not Available")
}

const fetchSavedInfo = async (): Promise<void> => {
    try {
        const querySnapshot = await getDocs(collection(db, 'hospitals'));
        hospitals.value = querySnapshot.docs.map((doc) => {
            return {
                id: doc.id, // Store the document ID
                data: doc.data(),
            };
        });
        isActive.value = true;
    } catch (error) {
        console.error('Error fetching saved hospitals:', error);
        alert(error);
    }
};

const deleteHospital = async (hospitalId: string): Promise<void> => {

    try {
        await deleteDoc(doc(db, "hospitals", hospitalId));
        alert('Hospital is being deleted, Refresh Browser')
    } catch (error) {
        console.error('Unable to delete:', error);
        alert(error);
    }
}


const exportToCSV = (hospital: any): void => {
    const convertToCSV = (data: any): string => {
        const flattenObject = (obj: any): Record<string, any> => {
            const flattened: Record<string, any> = {};

            const flatten = (prefix: string, value: any) => {
                if (typeof value === 'object' && value !== null) {
                    if (Array.isArray(value)) {
                        value.forEach((item, index) => {
                            flatten(`${prefix}.${index}`, item);
                        });
                    } else if (value instanceof Object && !Array.isArray(value)) {
                        for (const key in value) {
                            if (key === 'address') {
                                flatten(prefix, value[key]);
                            } else {
                                flatten(`${prefix}.${key}`, value[key]);
                            }
                        }
                    }
                } else {
                    flattened[prefix] = value;
                }
            };

            for (const key in obj) {
                flatten(key, obj[key]);
            }

            return flattened;
        };

        const flattenedData = flattenObject(data);
        const header = Object.keys(flattenedData).join(',') + '\n';
        const row = Object.values(flattenedData).join(',') + '\n';
        return header + row;
    };

    const csvContent = convertToCSV(hospital.data);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'hospital.csv');
    link.click();
    alert('Download Successful');
};


onMounted(() => {
    fetchSavedInfo();
});












</script>



  