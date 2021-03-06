import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { handleAddNewDeck } from '../actions'
import { NavigationActions } from 'react-navigation'

class NewDeck extends Component {
  // State property that will handle TextInput value
  state = {
    newTitle: ''
  }
  changeText = (text) => {
    this.setState({
      newTitle: text
    })
  }

  submit = () => {
    const { dispatch, navigation } = this.props
    const newTitle = this.state.newTitle
    // Dispatch the action to update redux store and AsyncStorage
    // Takes as parameter a new title
    dispatch(handleAddNewDeck(newTitle))

    this.setState({
      newTitle: ''
    })

    // Go back to previous screen after submitting
    navigation.dispatch(NavigationActions.back())
  }

  render () {
    const { newTitle } = this.state
    return (
      // Text inputs will not be hidden when virtual keyboard shows up
      <KeyboardAvoidingView behavior='padding' style={styles.mainView}>
        <Text style={styles.header}>
          Title of your new deck
        </Text>
        <TextInput
          value={newTitle}
          onChangeText={text => this.changeText(text)}
          placeholder='Enter title for your new deck'
          style={styles.textInput}
        >
        </TextInput>
        <TouchableOpacity
          style={[styles.submitBtn, !newTitle ? styles.submitDisabled : {}]}
          onPress={this.submit}
          disabled={!newTitle}
          >
            <Text style={!newTitle ? {opacity: 0.4} : {}}>CREATE DECK</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
    justifyContent: 'flex-end',
    width: 300,
    textAlign: 'center'
  },
  textInput: {
    borderWidth: 1,
    margin: 5,
    padding: 5,
    height: 40,
    width: 300,
  },
  submitBtn: {
    borderWidth: 1,
    borderRadius: 2,
    padding: 5,
    margin: 5,
    width: 200,
    alignItems: 'center'
  },
  submitDisabled: {
    borderColor: 'rgba(0, 0, 0, 0.2)',
  }
})

export default connect()(NewDeck)