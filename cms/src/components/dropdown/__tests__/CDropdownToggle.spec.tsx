import * as React from 'react'
import { render /*, screen */ /*, fireEvent */ /* ,waitFor */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CDropdownToggle } from '../../../index'

test('loads and displays CDropdownToggle component', async () => {
  const { container } = render(<CDropdownToggle>Test</CDropdownToggle>)
  expect(container).toMatchSnapshot()
})

test('CDropdownToggle customize', async () => {
  const { container } = render(
    <CDropdownToggle caret={true} split={true} trigger="focus">
      Test
    </CDropdownToggle>,
  )
  expect(container).toMatchSnapshot()
  expect(container.firstChild).toHaveClass('dropdown-toggle')
  expect(container.firstChild).toHaveClass('dropdown-toggle-split')
})
