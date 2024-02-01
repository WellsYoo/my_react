import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Recommand: FC<IProps> = () => {
  return <div>Recommand</div>
}

export default memo(Recommand)
