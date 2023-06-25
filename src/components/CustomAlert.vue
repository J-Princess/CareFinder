<template>
    <div class="custom-alert">
        <div class="custom-alert-content">
            <slot></slot>
        </div>
        <button class="custom-alert-close" @click="$emit('close')">×</button>
    </div>
</template>
  
<style scoped>
.custom-alert {
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.custom-alert-content {
    margin-bottom: 10px;
}

.custom-alert-close {
    position: absolute;
    top: 5px;
    right: 5px;
    border: none;
    background-color: transparent;
    color: #999;
    cursor: pointer;
    font-size: 14px;
}
</style>