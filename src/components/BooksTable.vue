<template>
    <div class="books-table-container">
        <DataTable
            :value="filteredBooks"
            :rows="10"
            :row-hover="true"
            paginator
            stripedRows
            paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
            :currentPageReportTemplate="
                language == 'en'
                    ? '{first} to {last} of {totalRecords}'
                    : '{first} do {last} z {totalRecords}'
            "
        >
            <Column
                class="author-column"
                field="author"
                :header="language === 'en' ? 'Author' : 'Autor'"
                :sortable="true"
            />
            <Column
                class="title-column"
                field="title"
                :header="language === 'en' ? 'Title' : 'Tytuł'"
                :sortable="true"
            />
            <Column
                class="category-column"
                field="formattedCategory"
                :header="language === 'en' ? 'Category' : 'Kategoria'"
            />
            <!--            <Column field="actions" />-->
        </DataTable>
    </div>
</template>

<script setup lang="ts">
import { filteredBooks, language } from '@/constants'
</script>
