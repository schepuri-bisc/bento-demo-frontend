// Component to display a property
import { Grid, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';

function prepareLinks(properties, data) {
  return properties.map((prop) => {
    const newProp = { ...prop };
    const pattern = /{(.*)}/;
    if (prop.link) {
      newProp.link = prop.link.replace(pattern, (match, p1) => data[p1]);
    }
    if (prop.labelLink) {
      newProp.labelLink = prop.labelLink.replace(pattern, (match, p1) => data[p1]);
    }
    return newProp;
  });
}

const Anchor = ({ link, text, classes }) => (
  link.match(/\w+:\/\//)
    ? <a href={link} target="_blank" rel="noopener noreferrer" className={classes.link}>{text}</a>
    : <Link to={link} className={classes.link}>{text}</Link>
);

const PropertyItem = ({
  label, value, link, labelLink, classes,
}) => {
  const defaultValue = '';
  return (
    <Grid item container>
      <Grid item xs={6}>
        <span className={classes.title}>
          {labelLink ? <Anchor link={labelLink} text={label} classes={classes} /> : label}
        </span>
      </Grid>
      <Grid item xs={6} className={classes.content}>
        {value || value === 0 ? (
          link ? <Anchor link={link} text={value} classes={classes} /> : value
        ) : defaultValue}
      </Grid>
    </Grid>
  );
};

// Component to display a subsection
const Subsection = ({ config, data, classes }) => {
  const properties = prepareLinks(config.properties, data);
  return (
    <Grid item container className={classes.subsection}>
      <Grid item container direction="column" className={classes.subsectionBody} xs={9}>
        <Grid item>
          <span className={classes.detailContainerHeader}>{config.sectionHeader}</span>
        </Grid>
        {
          config.sectionDesc
            ? (
              <Grid item container className={classes.descriptionPart}>
                <Grid item><span className={classes.description}>Description -</span></Grid>
                <Grid item><span>{config.sectionDesc}</span></Grid>
              </Grid>
            ) : ''
        }
        {properties.map((prop) => (
          <PropertyItem
            key={prop.label}
            label={prop.label}
            value={data[prop.dataField]}
            classes={classes}
            link={prop.link}
            labelLink={prop.labelLink}
          />
        ))}
      </Grid>
      <Grid item xs={3} />
    </Grid>
  );
};

const styles = (theme) => ({
  content: {
    fontSize: '12px',
  },
  detailContainerHeader: {
    textTransform: 'uppercase',
    fontFamily: 'Lato',
    fontSize: '17px',
    letterSpacing: '0.025em',
    color: '#0296C9',
  },
  subsectionBody: {
    borderBottom: '1px solid #8DCAFF',
    paddingBottom: '15px',
  },
  subsection: {
    '&:last-child $subsectionBody': {
      borderBottom: 'none',
    },
  },
  title: {
    color: '#9d9d9c',
    fontFamily: theme.custom.fontFamilySans,
    fontSize: '12px',
    lineHeight: '12px',
    letterSpacing: '0.017em',
    fontWeight: '600',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
  },
  descriptionPart: {
    paddingBottom: '26px',
  },
  description: {
    fontWeight: 'bold',
  },
  link: {
    color: '#DD401C',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
    '&:visited': {
      color: '#9F3D26',
    },
  },

});

export default withStyles(styles, { withTheme: true })(Subsection);