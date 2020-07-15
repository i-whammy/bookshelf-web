<template>
    <div class="book-shelf">
      <div v-bind:key='record.title' v-for='record in bookRecords'> タイトル: {{record.title}}, 著者: {{record.author}}, 読み始めた日: {{record.startReadingDate}}</div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BookRecord from '@/domain/BookRecord'
import axios from 'axios'
import Component from 'vue-class-component'

@Component
export default class BookShelf extends Vue {
  private bookRecords: Array<BookRecord> = [new BookRecord(new Date(2020, 1, 1), 'This is a sample record.', 'Mr. X')];

  private records = []

  async mounted () {
    const record = await axios.get('http://localhost:16000/v1/records').then(
      function (response) {
        const first = response.data[0]
        return new BookRecord(new Date(first.startReadingDate[0], first.startReadingDate[1] - 1, first.startReadingDate[2]), first.title, first.authorName)
      }
    )
    this.bookRecords.push(record)
  }
}
</script>

<style scoped>

</style>
