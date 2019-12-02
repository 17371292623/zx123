// 地区导航
$(document).ready(function(){
	$.each(address,function(index,value){
		// 在area_item_zimu中创建数组address.length个子元素
		$("#area_item_zimu").append(`
			<div class="area_item clear">
				<div class="area_name area_name_new">${value.name} </div>
				<div class="area_city">
				</div>
			</div>`);
		// 在area_city中创建value.adr.length个a标签
		$.each(value.adr,function(index,value){
			$(".area_city:last").append(`
				<a href="">${value}</a>
			`)
		})
		
	})
	// 招标 问答 案例
	$.each(list,function(index,value){
		$(".cs_basic_box:last").append(`
			<div class="box_item box_item_new">
                <div class="box_title">
                     <h2>
                        <a href="" >
                            <span class="icon a"></span>
                           	${value.name}
                        </a>
                    </h2>
                </div>
                <div class="box_content">
                    <div class="box_text_item clear"></div>
                </div>
            </div>
		`);
		$.each(value.name_data,function(index,value){
			$(".box_text_item:last").append(`
				<div class="text_aRow">
	                <a href="">
	                     ${ value.name }
	                </a>
	                <span>${ value.time }</span>
	            </div>
			`)
		})
	})

	// 友情链接
	$.each(link_data,function(index,value){
		$(".gook_link:last").append(`
			<a href = "">${value}</a>
		`)

	})
	// 精品专题
	$.each(jpzt,function(index,value){
		$(".jpztls").append(
			`<div class="lisdty">
				<div class="khfjr">
				</div>
			</div>`
		);
		$.each(value.data,function(index,value){
			console.log(value.name)
			$(".khfjr:last").append(
				`<a href="" class="mingqi_logo">
					<img src=${value.name} alt="" class="lazy">
					<span class="mingqi_lnk text_ov">${value.text}</span>
				</a>`
			)
		});
	})
	$(".jpztls").append(
		`<div class="jptimglr">
			<div class="xgtimgl">
				<font class="icon"></font>
			</div>
			<div class="xgtimgr">
				<font class="icon"></font>
			</div>
		</div>`
	)
// 装修效果图
	// 获取数据
	$.each(image,function(index,value){
		$(".jxmtksd").append(
			`<div class="jxmti">
				<a href="" class="mingqi_logo">
					<img src=${value.adr} alt="" class="lazy">
					<span class="aaui text_ov">${value.text1}</span>
					<span class="aauier text_ov">${value.text2}</span>
				</a>
			</div>`
		)
	});
	$(".huanyisd").children().click(function(){
		$(this).addClass("er").siblings().removeClass('er');
		if ($(this).html() == '家居美图') {
			$(".jxmti:gt(7)").hide();
			$(".jxmti:lt(8)").show();
		}else{
			$(".jxmti:lt(8)").hide();
			$(".jxmti:gt(7)").show();
		}
	})

	// 局部之美
	$.each(jbzm,function(index,value){
		$(".xgt_layout_content:last").append(
			`<dl class="xgt_layout_content_one clear">
				<dt>
					<b></b>
					<span>
						<h3>
							<a href="">${value.text}</a>
						</h3>
					</span>
				</dt>
			</dl>`
		);
		$.each(value.data,function(index,value){
			$('.xgt_layout_content_one:last').append(
				`<dd>
					<a href="">
						<img src=${value.name} alt="">
						<span class="text_ov">${value.text}</span>
					</a>
				</dd>`
			)
		})
		
	})
	$(".xgt_layout_content").append(
		`<ul>
			<div class="ulleft ultext gray"></div>
			<div class="ul clear">
				<div class="conwer clear"></div>
			</div>
			<div class="ulright ultext gray"></div>
		</ul>`
	);
	$.each(conwer,function(index,value){
		$(".conwer").append(
			`<li>
				<a href="">
					<img src=${value.adr} alt="" />
				</a>
				<span>
					<h3>
						<a href="">${value.text}</a>
					</h3>
				</span>
			</li>`
		)
	});
	// 家居风格
	$.each(jjfg,function(index,value){
		$(".afright").append(
			`<div class="afrlis">
				<a href="">
					<img src=${value.adr} alt="">
					<span class="text_ov">${value.text}</span>
				</a>
			</div>`
		)
	});

	// 最新图册和友情链接
	$.each(item,function(index,value){
		$(".item").append(
			`<div class="alist"></div>`
		);
		$.each(value.data,function(index,value){
			$(".alist:last").append(
				`<a href="">${value}</a>`
			)
		})
	});
	$(".alist").append(
		`<div style="clear:both"></div>`
	)
	$(".alist:last").hide();
	$(".tab").children().click(function(){
		$(this).addClass("select").siblings().removeClass('select');
		if ($(this).html() == '最新图册') {
			$(".alist:last").hide();
			$(".alist:first").show();
		}else{
			$(".alist:last").show();
			$(".alist:first").hide();
		}
	})
})




