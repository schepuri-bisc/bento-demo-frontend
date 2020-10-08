import gql from 'graphql-tag';

// -------------- Case ID area configurations --------------
const header = {
  label: 'Project',
  dataField: 'project_acronym',
};

// --------------- Data panel configuration --------------
const subsections = [
  // Each object here represents a subsection in the panel
  // A maximum of 6 subsections are allowed
  {
    properties: [
      // Each object here represents a set of label:value pair of a property
      // A maximum of 10 properties are allowed
      {
        label: 'Project',
        dataField: 'project_acronym',
        // link property specify URL value should link to
        // space holder "{study_acronym}" will be replaced by
        // actual value in the property program_id
        // link: '/arm/{study_acronym}',
        // labelLink property specify URL label should link to
        // labelLink: '/programs',
        // external links must have URL scheme part such as "https://"
      },
      {
        label: 'Project Name',
        dataField: 'project_name',
      },
      {
        label: 'Project Type',
        dataField: 'project_type',
      },
      {
        label: 'Project Description',
        dataField: 'project_full_description',
      },
    ],
  },
];

// --------------- File table configuration --------------

const table = {
  // Set 'display' to false to hide the table entirely
  display: false,
  // Table title
  title: 'ASSOCIATED FILES',
  // Field name for files data, need to be updated only when using a different GraphQL query
  filesField: 'files',
  // Value must be one of the 'dataField's in "columns"
  defaultSortField: 'file_name',
  // 'asc' or 'desc'
  defaultSortDirection: 'asc',
  // A maximum of 10 columns are allowed
  columns: [
    {
      dataField: 'file_name',
      header: 'File Name',
    },
    {
      dataField: 'file_type',
      header: 'File Type',
    },
    {
      dataField: 'association',
      header: 'Association',
    },
    {
      dataField: 'file_description',
      header: 'Description',
    },
    {
      dataField: 'file_format',
      header: 'Format',
    },
    {
      dataField: 'file_size',
      header: 'Size',
      // set formatBytes to true to display file size (in bytes) in a more human readable format
      formatBytes: true,
    },
  ],
};

// --------------- GraphQL query configuration --------------

// query name, also used as root of returned data
const dataRoot = 'armDetail';
// Primary ID field used to query a case
const armIDField = 'project_acronym';
// GraphQL query to retrieve detailed info for a case
const GET_ARM_DETAIL_DATA_QUERY = gql`
  query armDetail($project_acronym: String) {
    armDetail(project_acronym: $project_acronym) {
      project_acronym
      project_name
      project_type
      project_full_description
      num_subjects
      num_files
      num_samples
      num_lab_procedures
      sample_types {
        group
        subjects
      }
      files {
          file_name
          file_type
          file_description
          file_format
          file_size
          file_id
          md5sum
      }
  }
  }
`;

export {
  header,
  dataRoot,
  armIDField,
  subsections,
  table,
  GET_ARM_DETAIL_DATA_QUERY,
};
