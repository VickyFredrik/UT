<template>
    <IonPage>
        <ion-header :transculent="true">
        <ion-toolbar>
            <ion-buttons>
            <ion-back-button :text="getBackButtonText()" default-href="/">
            </ion-back-button>
            </ion-buttons>
        </ion-toolbar>
        </ion-header>
    <ion-content :fullscreen="true">
    <div>
        <ion-title>
            Vicky_Fredrik_Mawuntu<br />
        </ion-title>
        &copy; Vicky Fredrik Mawuntu, NIM : 041398058
    </div>
    </ion-content>
    </IonPage>
</template>

<script lang="ts">
import { IonBackButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AboutPage',
    data(){
        return{
            getBackButtonText:() =>{
                const win = window as any;
                const mode = win && win.Ionic && win.Ionic.mode;
                return mode === 'ios'?'Inbox':"Inbox"
            }
        }
    },
    components:{
        IonBackButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar
    },
});
</script>