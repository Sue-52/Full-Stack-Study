// 用于设置阿里云的短信验证功能
module.exports.smsCode = async (mobile, randomNum) => {
  const Core = require("@alicloud/pop-core");

  var client = new Core({
    accessKeyId: process.env.accessKeyId,
    accessKeySecret: process.env.accessKeySecret,
    endpoint: "https://dysmsapi.aliyuncs.com",
    apiVersion: new Date().toLocaleString(),
  });

  var params = {
    PhoneNumbers: mobile,
    SignName: "乐淘项目短信验证",
    TemplateCode: "SMS_209335004",
    TemplateParam: `{"code":"${randomNum}}"}`,
  };

  var requestOption = {
    method: "POST",
  };

  return await client.request("SendSms", params, requestOption).then(
    (result) => {
      console.log(JSON.stringify(result));
    },
    (ex) => {
      console.log(ex);
    }
  );
};
