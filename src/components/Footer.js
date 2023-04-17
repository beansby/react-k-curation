import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return(
        <footer>
            
            {/* site map */}
            <div className="container-footer">
                <div className="contents-sitemap">
                    <Link className="button-sitemap " to={'https://korean.visitkorea.or.kr/main/main.do#home'}> 대한민국 구석구석 여행 정보</Link>
                    <Link className="button-sitemap " to={'https://www.visitkorea.or.kr/'}> VisitKorea </Link>
                </div>
            </div>

            <div className="container-footer border-t-[1px] border-lightgrey pt-6 px-2">
                <ul className="flex ">
                    <li className="w-[160px]">
                        <h2 className="footer-title"> ABOUT US</h2>
                        <Link className="footer-link" to={""}> 회사소개 </Link>
                    </li>

                    <li className="w-[200px]">
                        <h2 className="footer-title"> SITE MAP</h2>
                        <Link className="footer-link" to={"https://conlab.visitkorea.or.kr/"}> 한국관광콘텐츠랩 </Link>
                        <Link className="footer-link" to={"https://datalab.visitkorea.or.kr/datalab/portal/main/getMainForm.do"}> 한국관광데이터랩 </Link>
                        <Link className="footer-link" to={"https://touredu.visitkorea.or.kr/"}> 관광e배움터 </Link>
                    </li>

                    <li className="w-[160px]">
                        <h2 className="footer-title"> HELP </h2>
                        <Link className="footer-link" to={"https://kto.visitkorea.or.kr/kor/customer/involvement.kto"}> 고객의 소리 </Link>
                    </li>
                </ul>
            </div>

            <div className="container-footer border-t-[1px] border-lightgrey pt-2">
                <div className="contents-policy">
                    <Link className="policy-link font-semibold" to={'#'}> 개인정보처리방침 </Link>
                    <Link className="policy-link font-normal border-l-[1px] border-lightgrey" to={'#'}> 이용약관 </Link>
                </div>

                <div className="contents-policy">
                    <div className="policy-link leading-loose ">
                        <dl className="inline-block text-grey pr-3">
                            <dt className="inline-block "> 소재지 : &nbsp; </dt>
                            <dd className="inline-block">26464 강원도 원주시 세계로 10</dd>
                        </dl>
                        <dl className="inline-block text-grey pr-3">
                            <dt className="inline-block ">TEL : &nbsp;</dt>
                            <dd className="inline-block"> (033)738-3000 </dd>
                        </dl>
                        <dl className="inline-block text-grey pr-3">
                            <dt className="inline-block "> 사업자등록번호 : &nbsp; </dt>
                            <dd className="inline-block"> 202-81-50707 </dd>
                        </dl>
                        <dl className="inline-block text-grey pr-3">
                            <dt className="inline-block "> 통신판매업신고 : &nbsp;  </dt>
                            <dd className="inline-block"> 제 2009-서울중구-1234호 </dd>
                        </dl>
                    </div>
                    <div className="policy-link">
                        <p className="text-grey">
                        Copyright © KTO. ALL RIGHT RESERVED.
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    )
}