<template>
<div class="bg-black mx-auto w-10/12 sm:w-8/12 h-screen tracking-tighter">
    <KinesisContainer class="flex flex-col justify-center items-center gap-4 h-full">
      <KinesisElement :strength="10" axis="both" class="text-white text-xl sm:text-3xl  font-general">
        <!-- You’re scrolling... so you’re definitely interested -->
        Not great at everything...
      </KinesisElement>
      <KinesisElement :strength="10" axis="both" class="text-white text-xl sm:text-3xl  font-general">
        <!-- You’re scrolling... so you’re definitely interested -->
        but yeah i can <span class="font-extrabold">Google</span>
      </KinesisElement>
      <KinesisElement :strength="10" axis="both" class="text-gray-600  font-general">
        Well I code. In JavaScript.
      </KinesisElement>
      <KinesisElement :strength="10" axis="both" class="text-gray-600   font-general">
        But not good at CSS.
      </KinesisElement>
      <KinesisElement :strength="10" axis="both" class="text-gray-600   font-general">
        <img src="../assets/sad.gif" alt="" class="w-28 h-auto">
      </KinesisElement>

    </KinesisContainer>
  </div>

</template>

<script setup>
import { KinesisContainer, KinesisElement } from 'vue-kinesis';

</script>
