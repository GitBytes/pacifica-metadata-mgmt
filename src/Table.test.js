import React from 'react'
import ReactDOM from 'react-dom'
import DynamicTable from './Table'
import { act, wait } from '@testing-library/react'

describe("<DynamicTable /> renders", function() {
  it('renders without crashing', async function () {
    expect.assertions(1)
    const div = document.createElement('div')
    act(() => {
      ReactDOM.render(<DynamicTable MDUrl="http://localhost:8121" object="users" />, div)
    })
    await wait(() => {
      expect(div.querySelector('div.rt-resizable-header-content').textContent).toEqual('ID')
    })
    ReactDOM.unmountComponentAtNode(div)
  })
})