import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const AppFootder: FC<IProps> = () => {
  return <div>AppFootder</div>
}

export default memo(AppFootder)
