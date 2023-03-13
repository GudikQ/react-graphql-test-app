import { cleanup, render, screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'

import { mockedGetUsersFailed, mockedGetUsersSuccess, mockedUsers } from '../../mocks/mockUsers'
import { UserListContainer } from '../UserListContainer'

describe('UserListContainer', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup)

  it('should render user in the UsersTable', async () => {
    render(
      <MockedProvider mocks={mockedGetUsersSuccess} addTypename={false}>
        <UserListContainer />
      </MockedProvider>,
    )

    expect(await screen.findByText(mockedUsers.users[0].name)).toBeVisible()
  })

  it('should show error message', async () => {
    render(
      <MockedProvider mocks={mockedGetUsersFailed} addTypename={false}>
        <UserListContainer />
      </MockedProvider>
    );

    expect(await screen.findByText('Error while getting data')).toBeInTheDocument()
  })
})
