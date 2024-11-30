import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

// Register a default font
Font.register({
  family: 'Roboto',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf'
});

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 30,
    fontFamily: 'Roboto'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10
  },
  label: {
    width: 120,
    fontWeight: 'bold'
  },
  value: {
    flex: 1
  },
  description: {
    marginTop: 20
  }
});

// Create Document Component
const EstCard = ({ jobData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>E-Job Card</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Job ID:</Text>
          <Text style={styles.value}>{jobData.jobId}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Employee Name:</Text>
          <Text style={styles.value}>{jobData.employeeName}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Department:</Text>
          <Text style={styles.value}>{jobData.department}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Start Date:</Text>
          <Text style={styles.value}>{jobData.startDate}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>End Date:</Text>
          <Text style={styles.value}>{jobData.endDate}</Text>
        </View>
        <View style={styles.description}>
          <Text style={styles.label}>Task Description:</Text>
          <Text style={styles.value}>{jobData.taskDescription}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default EstCard;