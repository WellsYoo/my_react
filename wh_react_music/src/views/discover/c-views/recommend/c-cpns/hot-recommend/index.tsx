import AreaHeaderV1 from '@/components/area-header-v1'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RecommendWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  return (
    <RecommendWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
      ></AreaHeaderV1>
    </RecommendWrapper>
  )
}

export default memo(HotRecommend)
