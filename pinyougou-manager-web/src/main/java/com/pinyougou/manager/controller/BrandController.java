package com.pinyougou.manager.controller;

import java.util.List;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.dubbo.config.annotation.Reference;
import com.pinyougou.entity.PageResult;
import com.pinyougou.entity.Result;
import com.pinyougou.pojo.TbBrand;
import com.pinyougou.sellergoods.service.BrandService;
@RestController
@RequestMapping("/brand")
public class BrandController {
	@Reference
	private BrandService brandService;
	@RequestMapping("/findAll")
	public List<TbBrand>findAll(){
		return brandService.findAll();
	}
	@RequestMapping("/findPage")
	public PageResult findPage(Integer page,Integer size) {
		return brandService.findPage(page, size);
	}
	@RequestMapping("/add")
	public Result add(@RequestBody TbBrand brand) {
		try {
			brandService.add(brand);
			return new Result(true,"新增成功");
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(false,"新增失败");
		}

	}

}
