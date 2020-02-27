'use strict';

const Controller = require('egg').Controller;

class BookingController extends Controller {
  async getCurrency() {
    const { ctx } = this;
    // console.log('这是controller层');
    await ctx.service.booking.getCurrency()
  }

  async getLocation() {
    const { ctx } = this;
    await ctx.service.booking.getLocation()
  }
}

module.exports = BookingController;