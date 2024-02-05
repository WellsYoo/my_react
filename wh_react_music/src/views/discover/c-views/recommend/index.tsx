import { useAppDispatch } from '@/store'
import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { fetchBannerDataAction } from './store/recommend'
import TopBanner from './c-cpns/top-banner'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
  }, [])
  return (
    <div>
      <TopBanner></TopBanner>
      <div className="content wrap-v2">
        <div className="left">left</div>
        <div className="right">right</div>
      </div>
    </div>
  )
}

export default memo(Recommend)
