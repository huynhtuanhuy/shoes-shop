const moment = require('moment');
const fs = require('fs');
const path = require('path');

const emailService = require('../api/services/EmailService');

module.exports.cron = {
    paymentReminds: {
        schedule: '0 12 * * *',
        onTick: async () => {    
            console.log("Cron start");

            try {
                const users = await User.find({
                    where: {
                        memberType: {
                            in: ['y_pro', 'm_pro', 'trial']
                        }
                    }
                });

                for (let i = 0; i < users.length; i++) {
                    const user = users[i];
                    
                    if (!user.lastPaymentReminds && moment(user.expiredDate).diff(moment(), 'days') < 7) {
                        const mailBody = fs.readFileSync(path.resolve(__dirname, '../api/mailTemplates/thong_bao_gia_han.html'), 'utf-8');
            
                        await emailService.sendMail(
                            user.email,
                            "Gói tài khoản của quý khách sắp hết hạn",
                            mailBody.replace('%%fullname%%', user.name || user.email)
                                .replace('%%fullname%%', user.name || user.email)
                                .replace('%%fullname%%', user.name || user.email)
                                .replace('%%fullname%%', user.name || user.email)
                                .replace('%%expiredDate%%', moment(user.expiredDate).format("DD-MM-YYYY")),
                        );

                        await User.updateOne({ id: user.id })
                            .set({
                                lastPaymentReminds: new Date().valueOf(),
                            });
                    } else if (user.lastPaymentReminds && moment(user.expiredDate).diff(moment(), 'days') <= 0) {
                        const mailBody = fs.readFileSync(path.resolve(__dirname, '../api/mailTemplates/tam_khoa_dich_vu.html'), 'utf-8');
            
                        await emailService.sendMail(
                            user.email,
                            "Thông báo tạm khóa dịch vụ",
                            mailBody.replace('%%fullname%%', user.name || user.email)
                                .replace('%%packageName%%', user.memberType == "m_pro" ? "M Pro" : (user.memberType == "y_pro" ? "Y Pro" : "Free"))
                                .replace('%%fullname%%', user.name || user.email),
                        );

                        await User.updateOne({ id: user.id })
                            .set({
                                memberType: "banned",
                            });
                    }
                }
                
                console.log("Cron done");
            } catch (error) {
                console.log(error);
            }
        },
        timezone: 'Asia/Ho_Chi_Minh',
        start: true,
    }
};