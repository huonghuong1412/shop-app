import React, { Component } from 'react';
import './index.css'
class InstructionPage extends Component {
    render() {
        return (
            <section className="instruction__page mb-5 pb-5">
                <div className="container">
                    <div className="row pt-5 mb-3">
                        <div className="col-12">
                            <h2>Hướng dẫn</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="content-page">
                                <p>&nbsp;</p>
                                <h1 className="article-name">Hướng dẫn</h1>
                                <div className="article-content">
                                    <p>
                                        <strong>Cách thức mua hàng:&nbsp;</strong>
                                        Quý khách có thể mua hàng bằng cách đặt hàng qua website (được hướng dẫn chi tiết ở phần dưới), qua facebook hoặc gọi trực tiếp qua số hotline 08.88.37.29.29 Khi đặt hàng sẽ có nhân viên tư vấn liên hệ lại với khách để xác nhận đơn hàng.</p><p><strong>Cách thức thanh toán:</strong></p><ol><li>Thanh toán khi nhận hàng: Quý khách có thể thanh toán khi nhận hàng. Khách có thể kiểm tra hàng trước khi thanh toán để đảm bảo mình nhận sản phẩm ưng ý.</li><li>Khách thanh toán qua ngân hàng: Quý khách chuyển khoản hoặc nộp tiền mặt vào thông tin tài khoản bên dưới, Quý khách dùng ngân hàng trong cùng hệ thống để đỡ tốn phí nhé. (Ví dụ: vào ngân hàng Vietcombank để nộp tiền mặt vào tài khoản Vietcombank, dùng tài khoản tài khoản Vietcombank để chuyển tiền vào tài khoản Vietcombank của shop…) Nội dung chuyển là "Số điện thoại + mã đơn hàng (hoặc mã sản phẩm)". Khách sỉ ở xa thì dùng hình thức này nhé.</li><li>Khách lấy hàng tại shop: tiền mặt, cà thẻ hoặc chuyển khoản.</li></ol><p>&nbsp;</p><p><strong>Thông tin tài khoản:</strong></p><ol><li><strong>Tài Khoản Vietcombank:</strong><ul><li>Số tài khoản: 31 38 86 31 38</li><li>Tên tài khoản: Nguyễn Hoàng Đạt</li><li>Chi nhánh: Tân Định</li></ul></li><li><strong>Tài Khoản ACB:</strong><ul><li>Số tài khoản: 3138688</li><li>Tên tài khoản: Nguyễn Hoàng Đạt</li><li>Chi nhánh: Phan Đình Phùng</li></ul></li><li><strong>Tài Khoản Techcombank:</strong><ul><li>Số tài khoản: 19028914894010</li><li>Tên tài khoản: Nguyễn Hoàng Đạt</li><li>Chi nhánh: Quang Trung</li></ul></li><li><strong>Tài Khoản Sacombank:</strong><ul><li>Số tài khoản: 060110924952</li><li>Tên tài khoản: Nguyễn Hoàng Đạt</li><li>Chi nhánh: Gò Vấp</li></ul></li><li><strong>Tài Khoản BIDV:</strong><ul><li>Số tài khoản: 31310000230694</li><li>Tên tài khoản: Nguyễn Hoàng Đạt</li><li>Chi nhánh: Bắc Sài Gòn</li></ul></li><li><strong>Tài Khoản Agribank:</strong><ul><li>Số tài khoản: 6400205531065</li><li>Tên tài khoản: Nguyễn Hoàng Đạt</li><li>Chi nhánh: Gia Định</li></ul></li><li><strong>Tài Khoản Vietinbank:</strong><ul><li>Số tài khoản: 104869583951</li><li>Tên tài khoản:&nbsp;Nguyễn Hoàng Đạt</li><li>Chi nhánh: 9</li></ul></li></ol><p>&nbsp;</p><p><strong>Chính sách bán sỉ:</strong></p><p>1. Cùng Mỗi sản phẩm lấy số lượng trên 03 cái. Giá sỉ được chiết khấu 30%, Nếu đơn trên 5 triệu thì được chiết khấu 35%. Chọn mẫu tại web: <a href="https://kisuhi.vn/collections/all">https://kisuhi.vn/collections/all</a> Zalo: 0888372929 hoặc Facebook. Khách tỉnh chọn mẫu, chốt đơn xong chuyển khoản 100% tiền hàng! Shop sẽ đóng hàng gửi bưu điện, phí ship khách trả!! Khách HCM khuyến khích đến trực tiếp để lấy hàng để dễ lựa!!</p><p>2. <strong>Lưu ý</strong>: LƯU Ý: HÀNG MUA RỒI MIỄN ĐỔI TRẢ VÌ LÝ DO KHÁCH ĐỔI Ý. Shop chỉ nhận đổi trả khi hàng bị lỗi, sai mẫu trong vòng 24h sau khi nhận hàng. Cảm ơn quí khách!! Rất mong được hợp tác!</p><p><strong>Cách mua hàng qua website:</strong></p><p><strong>Bước 1:</strong>&nbsp;Truy cập Kisuhi.vn và lựa chọn sản phẩm cần mua để mua hàng</p><p><strong>Bước 2:</strong>&nbsp;Click và sản phẩm muốn mua, màn hình hiển thị ra pop up với các lựa chọn sau</p><p>Nếu bạn muốn tiếp tục mua hàng: Bấm vào phần tiếp tục mua hàng để lựa chọn thêm sản phẩm vào giỏ hàng</p><p>Nếu bạn muốn xem giỏ hàng để cập nhật sản phẩm: Bấm vào xem giỏ hàng</p><p>Nếu bạn muốn đặt hàng và thanh toán cho sản phẩm này vui lòng bấm vào: Đặt hàng và thanh toán</p><p><strong>Bước 3:</strong>&nbsp;Lựa chọn thông tin tài khoản thanh toán</p><p>Nếu bạn đã có tài khoản vui lòng nhập thông tin tên đăng nhập là email và mật khẩu vào mục đã có tài khoản trên hệ thống.</p><p>Nếu bạn chưa có tài khoản và muốn đăng ký tài khoản vui lòng điền các thông tin cá nhân để tiếp tục đăng ký tài khoản. Khi có tài khoản bạn sẽ dễ dàng theo dõi được đơn hàng của mình</p><p>Nếu bạn muốn mua hàng mà không cần tài khoản vui lòng nhấp chuột vào mục đặt hàng không cần tài khoản</p><p><strong>Bước 4:</strong>&nbsp;Điền các thông tin của bạn để nhận đơn hàng, lựa chọn hình thức thanh toán, nếu&nbsp;"thanh toán qua ngân hàng" thì khách thanh toán theo hướng dẫn ở trên.</p><p><strong>Bước 5:</strong>&nbsp;Xem lại thông tin đặt hàng, điền chú thích và gửi đơn hàng</p><p>Sau khi nhận được đơn hàng bạn gửi, Kisuhi sẽ email và liên hệ bằng cách gọi điện lại để xác nhận lại đơn hàng và địa chỉ của bạn.</p><p>Trân trọng cảm ơn.</p><p><br /><strong>Mọi thắc mắc, quý khách hàng vui lòng liên hệ</strong><br />Hotline&nbsp; &nbsp;: 0888 37 29 29; 0942 37 22 29<br />Website&nbsp; :&nbsp;<a href="https://huongz.web.app/">huongz.web.app</a><br />Email&nbsp; &nbsp; &nbsp;: info@enda.vn<br />Facebook:&nbsp;<a href="https://www.facebook.com/Kisuhi/">facebook.com/Kisuhi</a></p></div><p>&nbsp;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default InstructionPage;
