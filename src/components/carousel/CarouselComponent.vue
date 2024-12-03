<template>
  <div ref="slide" class="flex" @pointerdown.prevent="foo">
    <slot> </slot>
  </div>
</template>
<script setup lang="ts">
import { ref, provide, useTemplateRef, onMounted } from "vue";
const props = defineProps<{
  dataLength: number;
  gap: number;
}>();
const slide = useTemplateRef<HTMLDivElement>("slide");
const shiftX = ref(0);
function foo(event: MouseEvent) {
  const initial = event.clientX + shiftX.value;

  slide.value!.onpointermove = (event: MouseEvent) => {
    let moveX = initial - event.clientX;
    if (moveX < 0) {
      shiftX.value = 0;
    } else if (moveX >= getRightEdge() + props.gap * 5) {
      shiftX.value = getRightEdge() + props.gap * 5;
    } else {
      shiftX.value = initial - event.clientX;
    }
    slide.value!.style.transform = `translateX(${-shiftX.value}px)`;
  };

  slide.value!.onpointerup = () => {
    slide.value!.onpointermove = null;
    slide.value!.onpointerup = null;
  };
}
const getRightEdge = () => {
  return (
    slide.value!.firstElementChild!.getBoundingClientRect().width *
      slide.value!.children.length -
    slide.value!.offsetWidth
  );
};
onMounted(() => {
  slide.value!.style.gap = String(props.gap) + "px";
});

const currentSlide = ref<number>(0);
const lastSlide = ref<number>(props.dataLength - 1);
const next = (): number => {
  return currentSlide.value === lastSlide.value
    ? (currentSlide.value = 0)
    : currentSlide.value++;
};
const prev = () => {
  return currentSlide.value === 0
    ? (currentSlide.value = lastSlide.value)
    : currentSlide.value--;
};

provide("currentIndex", currentSlide);
</script>
