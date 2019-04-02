'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var assert = require('assert');
var ganache = require('ganache-cli');
var Web3 = require('web3');
var web3 = new Web3(ganache.provider());

compiledFactory = require();
compiledApplication = require();

beforeEach(async function () {
  accounts = await web3.eth.getAccounts();

  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface)).deploy({ data: compiledFactory.bytecode }).send({ from: accounts[0], gas: '1000000' });

  await factory.methods.createApplication('100').send({
    from: accounts[0],
    gas: '1000000'
  });

  var _ref = await factory.methods.getDeployedApplication().call();

  var _ref2 = _slicedToArray(_ref, 1);

  campaignAddress = _ref2[0];

  campaign = await new web3.eth.Contract(JSON.parse(compiledCampaign.interface), campaignAddress);
});