// Dependencies
import React, { FC, ReactElement, useContext, useState, useEffect } from 'react'
import { Modal, Badge, Input, DarkButton, Icon } from 'fogg-ui'
import { generateHexCode, redirectTo } from 'fogg-utils'

// Contexts
import { FormContext } from '@contexts/form'
import { AppContext } from '@contexts/app'

// Mutation
import CREATE_APP_MUTATION from '@graphql/apps/createApp.mutation'

interface iProps {
  isOpen: boolean
  label: string
  options: any
  onClose(): void
}

const CreateAppModal: FC<iProps> = ({
  isOpen,
  label,
  onClose,
  options
}): ReactElement => {
  // States
  const [required, setRequired] = useState<any>({
    appName: false,
    icon: false
  })

  // Contexts
  const { onChange, values, setInitialValues, setValue } = useContext(
    FormContext
  )
  const { post } = useContext(AppContext)

  // Methods
  const handleSubmit = async (): Promise<void> => {
    if (values.appName === '') {
      setRequired({
        appName: true
      })
    } else {
      const { createApp } = await post({
        mutation: CREATE_APP_MUTATION,
        variables: values
      })

      if (createApp) {
        redirectTo(`/dashboard/${createApp.id}/master`)
      }
    }
  }

  const handleIconColor = (): void => setValue('icon', generateHexCode())

  // Effects
  useEffect(() => {
    // Setting up our initial values
    setInitialValues({ appName: '', icon: generateHexCode(), description: '' })
  }, [])

  return (
    <Modal isOpen={isOpen} label={label} options={options} onClose={onClose}>
      <div>
        <label>
          App Name {required.appName && <Badge danger>Required</Badge>}
        </label>
        <Input
          name="appName"
          placeholder="First App? Try Blog or Forums"
          hasError={required.appName}
          onChange={onChange}
          value={values.appName}
        />
      </div>

      <div>
        <label>
          Icon Color <Icon type="fas fa-sync-alt" onClick={handleIconColor} />
        </label>
        <Input
          name="icon"
          placeholder="#000"
          onChange={onChange}
          value={values.icon}
          readOnly
          style={{
            color: 'white',
            backgroundColor: values.icon
          }}
        />
      </div>

      <div>
        <label>Description</label>
        <Input
          name="description"
          placeholder="Small description about your new app"
          onChange={onChange}
          value={values.description}
        />
      </div>

      <div>
        <DarkButton onClick={handleSubmit}>Create App</DarkButton>
      </div>
    </Modal>
  )
}

export default CreateAppModal
