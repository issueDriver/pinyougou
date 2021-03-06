package com.pinyougou.sellergoods.service;

import java.util.List;

import com.pinyougou.entity.PageResult;
import com.pinyougou.pojo.TbBrand;

/**
 * 品牌接口
 * @author 佐杰
 *
 */

public interface BrandService {
	//返回全部列表
	public List<TbBrand> findAll();
	
	
	/**
	 * 品牌分页
	 * @param pageNum 当前页面
	 * @param pageSize 每页记录数
	 * @return
	 */
	public PageResult findPage(int pageNum,int pageSize);
	
	/**
	 * 增加品牌
	 * @param brand
	 */
	public void add(TbBrand brand);
	/**
	 * 修改品牌
	 * @param brand
	 */
	public void update(TbBrand brand);
	/**
	 * 根据Id查询实体
	 * @param id
	 * @return
	 */
	
	public TbBrand findOne(Long id);
	
	/**
	 * 删除
	 * @param ids
	 */
	public void delete(Long[] ids);
	
	/**
	 * 品牌分页
	 * @param pageNum 当前页面
	 * @param pageSize 每页记录数
	 * @return
	 */
	public PageResult findPage(TbBrand brand,int pageNum,int pageSize);
	


}
