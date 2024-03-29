﻿function Test1()
{
  TestedApps.Orders.Run();
  let orders = Aliases.Orders;
  let mainForm = orders.MainForm;
  mainForm.MainMenu.Click("Orders|New order...");
  let orderForm = orders.OrderForm;
  let groupBox = orderForm.Group;
  let comboBox = groupBox.ProductNames;
  comboBox.ClickItem("ScreenSaver");
  groupBox.Quantity.wValue = 3;
  let textBox = groupBox.Price;
  textBox.Click(56, 5);
  textBox.SetText("$100");
  textBox = groupBox.Discount;
  textBox.Click(8, 15);
  textBox.SetText("50%");
  textBox = groupBox.groupBox1.Total;
  textBox.DblClick(30, 16);
  textBox.SetText("50");
  groupBox.Date.wDate = "2005-07-06";
  textBox = groupBox.Customer;
  textBox.Click(77, 10);
  textBox.SetText("Jack");
  textBox.Keys("[Tab]");
  let textBox2 = groupBox.Street;
  textBox2.SetText("Brick Lane");
  textBox2.Keys("[Tab]");
  textBox2 = groupBox.City;
  textBox2.Keys("![ReleaseLast]");
  textBox2.SetText("London");
  textBox2.Keys("[Tab]");
  textBox2 = groupBox.State;
  textBox2.SetText("Alaska");
  textBox2.Keys("[Tab]");
  groupBox.Zip.SetText("99501");
  let radioButton = groupBox.MasterCard;
  radioButton.ClickButton();
  textBox2 = groupBox.CardNo;
  textBox2.Click(21, 12);
  textBox2.SetText("123456");
  groupBox.ExpDate.wDate = "2005-07-06";
  aqObject.CheckProperty(comboBox, "wText", cmpEqual, "ScreenSaver");
  aqObject.CheckProperty(comboBox, "wItemCount", cmpEqual, 3);
  aqObject.CheckProperty(radioButton, "wChecked", cmpEqual, true);
  aqObject.CheckProperty(textBox, "wText", cmpEqual, "Jack");
  orderForm.ButtonOK.ClickButton();
  mainForm.Close();
  orders.dlgConfirmation.btnYes.ClickButton();
  orders.dlgSaveAs.btnSave.ClickButton();
}