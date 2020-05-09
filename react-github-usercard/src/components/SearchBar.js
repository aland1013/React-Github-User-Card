import React from 'react';
import { Grid, Form, Button } from 'semantic-ui-react';

class SearchBar extends React.Component {
  state = { searchText: '' };

  handleChanges = (e) => {
    this.setState({ searchText: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.searchText) {
      this.props.searchForUser(this.state.searchText);
    }
    this.setState({ searchText: '' });
  };

  render() {
    return (
      <Grid centered columns={2}>
        <Grid.Column textAlign="center">
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <Form.Input
                fluid
                placeholder="Search for a user"
                value={this.state.searchText}
                onChange={this.handleChanges}
              />
            </Form.Field>
            <Button primary type="submit">
              submit
            </Button>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default SearchBar;
