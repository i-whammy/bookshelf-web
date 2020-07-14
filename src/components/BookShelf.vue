<template>
    <div class="book-shelf">
      <div v-bind:key='record.title' v-for='record in bookRecords'> タイトル: {{record.title}}, 著者: {{record.author}}, 読み始めた日: {{record.startReadingDate}}</div>
    </div>
</template>

<script lang="ts">
import Vue, { Component } from 'vue'
import BookRecord from '@/domain/BookRecord'

export default class BookShelf extends Vue {
  private bookRecords: Array<BookRecord> = [new BookRecord(new Date(2020, 1, 1), 'Domain-Driven Design', 'Eric Evans'),
    new BookRecord(new Date(2020, 1, 1), 'Domain-Driven Design2', 'Eric Evans'),
    new BookRecord(new Date(2020, 1, 1), 'Domain-Driven Design3', 'Eric Evans')];
}
</script>

<style scoped>

</style>
