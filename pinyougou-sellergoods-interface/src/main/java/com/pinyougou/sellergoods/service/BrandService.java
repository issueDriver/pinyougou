package com.pinyougou.sellergoods.service;

import java.util.List;

import com.pinyougou.pojo.TbBrand;

/**
 * 品牌接口
 * @author 佐杰
 *
 */

public interface BrandService {
	//返回全部列表
	public List<TbBrand> findAll();

}
