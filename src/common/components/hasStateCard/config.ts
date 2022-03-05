import carbonCheckmarkFilled from '~icons/carbon/checkmark-filled'
import carbonWarningAltFilled from '~icons/carbon/warning-alt-filled'
import carbonErrorFilled from '~icons/carbon/error-filled'
import { styleVar } from '@/config'
import type { TypeOpton } from './types'

export const typeOption: TypeOpton = {
  success: {
    icon: carbonCheckmarkFilled,
    color: styleVar['color-success']
  },
  danger: {
    icon: carbonWarningAltFilled,
    color: styleVar['color-danger']
  },
  warning: {
    icon: carbonWarningAltFilled,
    color: styleVar['color-warning']
  },
  stop: {
    icon: carbonErrorFilled,
    color: styleVar['color-info']
  }
}
