import { signIn } from 'next-auth/client'
import Link from 'next/link'
import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'

import { FormWrapper, FormLink, FormLoading } from 'components/Form'
import Button from 'components/Button'
import TextField from 'components/TextField'
import React, { useState } from 'react'
import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import { useMutation } from '@apollo/client'
import { MUTATION_REGISTER } from 'graphql/mutations/register'

const FormSignUp = () => {
  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    email: '',
    username: '',
    password: ''
  })
  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }
  const [createUser, { error, loading }] = useMutation(MUTATION_REGISTER, {
    onError: (e) => {
      console.error(
        e?.graphQLErrors[0]?.extensions?.exception.data.message[0].messages[0]
          .message
      )
    },
    onCompleted: () => {
      !error &&
        signIn('credentials', {
          email: values.email,
          password: values.password,
          callbackUrl: '/'
        })
    }
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    createUser({
      variables: {
        input: {
          email: values.email,
          username: values.username,
          password: values.password
        }
      }
    })
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          placeholder="Username"
          type="text"
          icon={<AccountCircle />}
          onInputChange={(v) => handleInput('username', v)}
        />
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          icon={<Email />}
          onInputChange={(v) => handleInput('email', v)}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          icon={<Lock />}
          eyePassword
          onInputChange={(v) => handleInput('password', v)}
        />
        <TextField
          name="confirm_password"
          placeholder="Confirm password"
          type="password"
          icon={<Lock />}
          onInputChange={(v) => handleInput('confirm_password', v)}
        />

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Sign up now</span>}
        </Button>

        <FormLink>
          Already have an account?
          <Link href="/sign-in">
            <a>Sign in</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}
export default FormSignUp
