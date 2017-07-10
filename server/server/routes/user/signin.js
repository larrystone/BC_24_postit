import express from 'express';

module.exports = (req, res) => {
  //const models = data.models;
  res.status(200).json({ message : "sign in" });
};