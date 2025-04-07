import React from "react";
import { View, Input, Button, ScrollView } from "@tarojs/components";
import { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import "./index.scss";

const Cashbook = () => {
  const [records, setRecords] = useState([]);
  const [form, setForm] = useState({
    amount: "",
    type: "expense",
    date: new Date().toLocaleDateString(),
    remark: "",
  });

  useEffect(() => {
    const localData = Taro.getStorageSync("cashbook");
    if (localData) setRecords(localData);
  }, []);

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const handleSubmit = () => {
    if (!form.amount || isNaN(form.amount)) {
      Taro.showToast({ title: "请输入有效数据", icon: "none" });
      return;
    }

    if (form.amount < 0) {
      setForm({ ...form, type: "income" });
    } else {
      setForm({ ...form, type: "expense" });
    }

    const newRecords = [
      ...records,
      {
        ...form,
        id: Date.now(),
        amount: Number(form.amount),
      },
    ];

    setRecords(newRecords);
    Taro.setStorageSync("cashbook", newRecords);
    setForm({ ...form, amount: "", remark: "" });
  };

  return (
    <View className="cashbook">
      <View className="form-container">
        <View className="input-group">
          <Input
            type="number"
            placeholder="金额"
            value={form.amount}
            onInput={(e) => setForm({ ...form, amount: e.detail.value })}
          />
        </View>

        <View className="input-group">
          <Input
            placeholder="备注"
            value={form.remark}
            onInput={(e) => setForm({ ...form, remark: e.detail.value })}
          />
        </View>

        <Button className="submit-btn" onClick={handleSubmit}>
          添加记录
        </Button>
      </View>

      <View className="stats-container">
        <View className="stat-item income">
          <View className="stat-label">总收支</View>
          <View className="stat-amount">
            ¥ {records.reduce((acc, cur) => acc + cur.amount, 0).toFixed(2)}
          </View>
        </View>
      </View>

      <ScrollView className="record-list" scrollY>
        {records.map((record) => (
          <View key={record.id} className="record-item">
            <View className="amount">{record.amount}</View>
            <View className="remark">{record.remark}</View>
            <View className="date">{record.date}</View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Cashbook;
