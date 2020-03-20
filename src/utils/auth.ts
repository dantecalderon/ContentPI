// Dependencies
import jwt from 'jsonwebtoken'

// Utils
import { encrypt, setBase64 } from 'fogg-utils'

// Interface
import { iUser } from '../interfaces'

// Configuration
import { $security } from '../../config'

export const createToken = async (user: iUser): Promise<string[]> => {
  const { id, username, password, email, privilege, active } = user
  const token = setBase64(`${encrypt($security.secretKey)}${password}`)
  const userData = {
    id,
    username,
    email,
    privilege,
    active,
    token
  }

  const createTk = jwt.sign(
    { data: setBase64(userData) },
    $security.secretKey,
    { expiresIn: $security.expiresIn }
  )

  return Promise.all([createTk])
}
