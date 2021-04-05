import { signInValidate, signUpValidate } from '.'

describe('validations', () => {
  describe('signInValidate()', () => {
    it('should validate empty fields', () => {
      const values = { email: '', password: '' }
      expect(signInValidate(values).email).toMatchInlineSnapshot(
        `"\\"email\\" is not allowed to be empty"`
      )
      expect(signInValidate(values).password).toMatchInlineSnapshot(
        `"\\"password\\" is not allowed to be empty"`
      )
    })

    it('should return invalid email error', () => {
      const values = { email: 'invalid-email', password: '1234' }
      expect(signInValidate(values).email).toMatchInlineSnapshot(
        `"\\"email\\" must be a valid email"`
      )
    })
  })

  describe('signUpValidate()', () => {
    it('should validate empty fields', () => {
      const values = {
        username: '',
        email: '',
        password: '',
        confirm_password: ''
      }
      expect(signUpValidate(values).email).toMatchInlineSnapshot(
        `"\\"email\\" is not allowed to be empty"`
      )
      expect(signUpValidate(values).username).toMatchInlineSnapshot(
        `"\\"username\\" is not allowed to be empty"`
      )
      expect(signUpValidate(values).password).toMatchInlineSnapshot(
        `"\\"password\\" is not allowed to be empty"`
      )
      expect(signUpValidate(values).confirm_password).toMatchInlineSnapshot(
        `undefined`
      )
    })

    it('should return short username error', () => {
      const values = { username: 'hi', email: '', password: '' }

      expect(signUpValidate(values).username).toMatchInlineSnapshot(
        `"\\"username\\" length must be at least 5 characters long"`
      )
    })

    it('should return invalid email error', () => {
      const values = {
        username: 'user-invalid',
        email: 'invalid-email',
        password: ''
      }

      expect(signUpValidate(values).email).toMatchInlineSnapshot(
        `"\\"email\\" must be a valid email"`
      )
    })

    it('should return error if password does not match with confirm password', () => {
      const values = {
        username: 'user-invalid',
        email: 'user@site.com',
        password: '1234',
        confirm_password: '4321'
      }

      expect(signUpValidate(values).confirm_password).toMatchInlineSnapshot(
        `"confirm password does not match with password"`
      )
    })
  })
})
