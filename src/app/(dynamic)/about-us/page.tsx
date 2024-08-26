import React from 'react';

import OurGoals from '@/components/ourGoals';
import LeapatLogoSvg from '@/svgs/leapat.svg';
import Card from "@/components/card";


export default async function AboutUsPage() {
    return (
      <div>
				<div className="flex flex-col items-center space-y-2 text-center mb-[335px]">
					<div className="">
						<LeapatLogoSvg />
					</div>
					<div>
						<span className="align-right custom-underline text-[80px] font-semibold leading-[120px] text-white">
						  من نحــن؟
						</span>
					</div>
				</div>

				<div className="mb-[232px] flex flex-col items-center">
        
					<div className="mb-[55px]">
						<div className="flex items-baseline">
							<div>
								<p className="text-4xl font-semibold leading-[54px] text-white">
								من نحن؟
								</p>
							</div>
							<div
								className="h-[9px] w-[246px] rounded-[3px] bg-blueShade"
								style={{ top: '1392px', left: '725px' }}
							></div>
						</div>

						<p className="text-6xl font-semibold leading-[80px] text-white">
						تعرف علينا
						</p>
					</div>

					<div className="min-w-full max-w-[1030px] text-center">
						<p className="mb-24 py-3 text-2xl font-medium text-white">
						”ليبات“ مبادرة شبابية تقنية تأسست مطلع عام 2024، نسعى لتحقيق قفزات رقمية ملموسة يقودها الشباب المبتكر. نهدف إلى تعزيز ثقافة الابتكار والتعاون بين الشباب لمعالجة القضايا الملحة وتحقيق تأثير مستدام في مجالات الصحة، البيئة، التعليم، الفن، والثقافة. نسعى لبناء مجتمع أكثر وعياً وعدالة من خلال توفير الموارد والإرشاد وتطوير مهارات الشباب.
						</p>
					</div>
				</div>


				<div className="flex flex-wrap justify-center gap-40">
					<div className="relative h-[510px] w-[498px]">
							<div className="absolute h-full w-full transform bg-[url('../svgs/corner.png')] bg-no-repeat"></div>
							<div className="mr-5 mt-5 p-1">
								<div className=""></div>
									<div className="">
										<div className="flex items-baseline">
											<div>
												<p className="text-[36px] font-semibold leading-[54px] text-white">
												رؤيتنا
												</p>
											</div>
											<div
												className="h-[9px] w-[246px] rounded-[3px] bg-blueShade"
												style={{ top: '1392px', left: '725px' }}
											></div>
										</div>
										<h3 className="text-[60px] leading-[90px] font-semibold text-white">إلى ماذا نتطلع؟</h3>
										<p className="text-lg text-white">نسعى في ليبات للوصول لمجتمع يستخدام التكنولوجيا لتحقيق قفزات وتحولات رقمية ملموسة.
										نرى مستقبلا يقوده الشباب المبتكر يقدم حلولا جديدة ومبتكرة للتحديات العالمية في مجالات عدة</p>
								</div>
							</div>
					</div>
					<div className="relative h-[510px] w-[498px]">
							<div className="absolute top-0 left-0 scale-x-[-1] h-full w-full transform bg-[url('../svgs/corner.png')] bg-no-repeat"></div>
							<div className="mr-5 mt-5 p-1">
								<div className=""></div>
								<div className="">
							      <div className="flex items-baseline">
											<div>
												<p className="text-[36px] font-semibold leading-[54px] text-white">
												مهمتنا
												</p>
											</div>
											<div
												className="h-[9px] w-[246px] rounded-[3px] bg-blueShade"
												style={{ top: '1392px', left: '725px' }}
											></div>
										</div>
										<h3 className="text-[28px] font-semibold text-white">ماعلينا فعله</h3>
										<p className="text-lg text-white">نسعى في ليبات إلى تحقيق قفزات رقمية ملموسة من خلال تمكين الشباب المبتكر، وتعزيز ثقافة الابتكار والتعاون لاستخدام التكنولوجيا في معالجة القضايا الملحة وتحقيق تأثير مستدام.</p>
								</div>
							</div>
					</div>
				</div>

        
				<section className="py-3 mt-80">
					<OurGoals
							title="أهدافنا"
							subTitle="إلى ماذا نسعى؟"
							description="إلى قيادة التحول الرقمي في مختلف القطاعات من خلال تطوير وتنفيذ مشاريع وحلول تكنولوجية مبتكرة، والعمل على الاستفادة من التكنولوجيا لبناء مجتمع أكثر وعيًا. من خلال توفير الموارد والإرشاد والفرص للشباب لتحقيق ابتكاراتهم وتطوير مهاراتهم، وتعزيز الشراكات والتعاون مع المنظمات والخبراء."
					/>
        </section>
        </div>
    )
}
