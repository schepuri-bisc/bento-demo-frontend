import gql from 'graphql-tag';

// --------------- Dashboard Sidebar Filters configuration --------------
// A maximum of 12 facetSearchData are allowed

export const facetSearchData = [
  {
    label: 'Program', field: 'group', api: 'subjectCountByProgram', datafield: 'program_acronym', show: true,
  },
  {
    label: 'Project', field: 'group', api: 'subjectCountByProject', datafield: 'project_info', show: true,
  },
  {
    label: 'Gender', field: 'group', api: 'subjectCountByGender', datafield: 'gender', show: true,
  },
  {
    label: 'Race', field: 'group', api: 'subjectCountByRace', datafield: 'race', show: true,
  },
  {
    label: 'Ethnicity', field: 'group', api: 'subjectCountByEthnicity', datafield: 'ethnicity', show: true,
  },
  {
    label: 'Vital Status', field: 'group', api: 'subjectCountByVitalStatus', datafield: 'vital_status', show: true,
  },
  {
    label: 'Tumor Stage', field: 'group', api: 'subjectCountByTumorStage', datafield: 'tumor_stage', show: true,
  },
  {
    label: 'Sample Type', field: 'group', api: 'subjectCountBySampleType', datafield: 'sample_types', show: true,
  },
  {
    label: 'File Type', field: 'group', api: 'subjectCountByFileType', type: 'object', datafield: 'files', objField: 'file_type', show: true,
  },
  {
    label: 'File Description', field: 'group', api: 'subjectCountByFileDescription', type: 'object', datafield: 'files', objField: 'file_description', show: true,
  },
];

// --------------- Dashboard Widgets configuration --------------
// A maximum of 6 widgets are allowed
export const widgetsData = [
  {
    type: 'sunburst',
    label: 'Program and Project',
    dataName: 'armsByPrograms',
    datatable_level1_field: 'program_acronym',
    datatable_level2_field: 'project_acronym',
    show: true,
  },
  {
    type: 'donut',
    label: 'Gender',
    dataName: 'subjectCountByGender',
    datatable_field: 'gender',
    show: true,
  },
  {
    type: 'donut',
    label: 'Race',
    dataName: 'subjectCountByRace',
    datatable_field: 'race',
    show: true,
  },
  {
    type: 'donut',
    label: 'Vital Status',
    dataName: 'subjectCountByVitalStatus',
    datatable_field: 'vital_status',
    show: true,
  },
  {
    type: 'donut',
    label: 'Tumor Stage',
    dataName: 'subjectCountByTumorStage',
    datatable_field: 'tumor_stage',
    show: true,
  },
  {
    type: 'donut',
    label: 'Sample Type',
    dataName: 'subjectCountBySampleType',
    datatable_field: 'sample_type',
    show: true,
  },
];

// --------------- Dahboard Table external link configuration --------------
// Ideal size for externalLinkIcon is 16x16 px
export const externalLinkIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/bento-frontend/master/src/assets/program/externalLinkIcon.svg',
  alt: 'External link icon',
};

// --------------- Dashboard Table configuration --------------
export const dashboardTable = {
  tableTitle: 'Cases',
  tableData: [
    // A maximum of 10 columns (tableData) are allowed
    {
      dataField: 'subject_id',
      header: 'Case ID',
      sort: 'asc',
      link: '/case/{subject_id}',
      primary: true,
      display: true,
    },
    {
      dataField: 'program_id',
      header: 'Program ID',
      sort: 'asc',
      display: false,
    },
    {
      dataField: 'program_acronym',
      header: 'Program Acronym',
      sort: 'asc',
      link: '/program/{program_id}',
      display: true,
    },
    {
      dataField: 'project_acronym',
      header: 'Project Acronym',
      sort: 'asc',
      link: '/project/{project_acronym}',
      display: true,
    },
    {
      dataField: 'project_info',
      header: 'Project Name',
      sort: 'asc',
      display: true,
    },
    {
      dataField: 'gender',
      header: 'Gender',
      sort: 'asc',
      display: true,
    },
    {
      dataField: 'race',
      header: 'Race',
      sort: 'asc',
      display: true,
    },
    {
      dataField: 'ethnicity',
      header: 'Ethnicity',
      sort: 'asc',
      display: true,
    },
    {
      dataField: 'age',
      header: 'Age',
      sort: 'asc',
      display: true,
    },
    {
      dataField: 'tumor_stage',
      header: 'Tumor Stage',
      sort: 'asc',
      display: true,
    },
    {
      dataField: 'vital_status',
      header: 'Vital Status',
      sort: 'asc',
      display: true,
    },
  ],
};

// --------------- Dashboard Query configuration --------------
export const GET_DASHBOARD_DATA_QUERY = gql`{
  numberOfPrograms
  numberOfProjects
  numberOfSubjects
  numberOfSamples
  numberOfLabProcedures
  numberOfFiles
   subjectCountByProgram {
        group
        subjects
    }
    subjectCountByProject {
        group
        subjects
    }

    subjectCountByGender {
        group
        subjects
    }
    subjectCountByRace {
        group
        subjects
    }
    subjectCountByEthnicity {
        group
        subjects
    }
    subjectCountByVitalStatus {
        group
        subjects
    }
    subjectCountByTumorStage{
        group
        subjects
    }
    subjectCountBySampleType{
        group
        subjects
    }
    subjectCountByFileType{
        group
        subjects
    }
    subjectCountByFileDescription{
        group
        subjects
    }

  armsByPrograms {
      program
      caseSize
      children {
          arm
          caseSize
          size
      }

  }
  subjectOverViewPaged(first: 100) {
  subject_id,
  program_acronym,
  program_name,
  program_id,
  project_acronym,
  project_info,
  tumor_stage,
  gender,
  race,
  ethnicity,
  age,
  vital_status,
  num_samples,
  sample_types,
  lab_procedures,
  samples,
  files {
        file_id
        file_description
        file_format
  }
}

  }`;

// --------------- Dashboard Query configuration --------------
export const GET_DASHBOARD_TABLE_DATA_QUERY = gql`{

  subjectOverViewPaged(first: 10000) {
    subject_id,
    program_acronym,
    program_name,
    program_id,
    project_acronym,
    project_info,
    tumor_stage,
    gender,
    race,
    ethnicity,
    age,
    vital_status,
    num_samples,
    sample_types,
    lab_procedures,
    samples,
    files {
          file_id
          file_description
          file_type
    }
}
  }`;
