// Begin by importing the necessary components from the React and React Native libraries.
import React from 'react';
import { StyleSheet, View, SectionList, Text } from 'react-native';

// The main component for our app.
export default class SimpleSectionListApp extends React.Component {

  // This array provides the structured data for our list.
  // Each section has a title and an associated array of data items.
  sections = [
    { title: 'Citrus', data: ['Orange', 'Lemon', 'Grapefruit', 'Lime'] },
    { title: 'Berries', data: ['Strawberry', 'Raspberry', 'Blueberry'] },
    { title: 'Tropical', data: ['Mango', 'Papaya', 'Pineapple', 'Coconut'] },
  ];

  // This function describes how each individual data item should be rendered.
  // For each item, a Text component is returned displaying the item's content.
  renderItem = ({ item }) => (
      <Text style={styles.itemText}>
        {item}
      </Text>
  );

  // This function describes how each section header should be displayed.
  // The section header shows the title of each section.
  renderSectionHeader = ({ section: { title } }) => (
      <Text style={styles.sectionHeader}>
        {title}
      </Text>
  );

  // The render function returns the UI components to be rendered to the screen.
  render() {
    return (
        // The container holds all of our components.
        <View style={styles.container}>

          {/* The SectionList component is responsible for displaying the data in sections. */}
          <SectionList
              sections={this.sections}              // This prop provides the data to the SectionList.
              renderItem={this.renderItem}          // Here we define how each data item should be displayed.
              renderSectionHeader={this.renderSectionHeader} // This prop defines how each section header should appear.
              keyExtractor={(item) => item}         // This provides a unique identifier for each item, which is important for performance and to prevent rendering issues.
          />
        </View>
    );
  }
}

// This object contains the styles for our UI components.
// Styling in React Native is similar to CSS, but it uses a different syntax.
const styles = StyleSheet.create({
  container: {
    flex: 1,                     // This makes sure the container takes up the full height of the screen.
    paddingTop: 40,              // This provides some spacing at the top of the app.
    paddingHorizontal: 20,      // This provides some spacing on the sides of the app.
    backgroundColor: '#f7f7f7', // This sets a light gray background color.
  },
  itemText: {
    fontSize: 18,             // Sets the font size for the list items.
    padding: 10,              // Adds some spacing around each item.
  },
  sectionHeader: {
    fontSize: 20,                // This sets the font size for section headers.
    fontWeight: 'bold',          // This makes section headers bold.
    backgroundColor: '#eee',     // Gives the section headers a different background color.
    padding: 10,                 // Adds some spacing around each section header.
  },
});
