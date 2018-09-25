<template>
    <div>uplad</div>
</template>
<script>
import UploadList from './UploadList';
import Upload from './Upload';
export default {
    components:{
        UploadList,
        Upload,
    },
    props:{
        action:{
            type:String,
        }
    }
    
}
</script>
