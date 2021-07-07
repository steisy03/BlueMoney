import Request from "./Request";

export default class Model {
  
  constructor(basePath, token) {
    this.httpClient = new Request(token);
    this.basePath = basePath;
  }

  //utilities
  async getUtilities(stateID, serviceTypeID) {
    return this.httpClient.get(
      `${this.basePath}/utilities.json?stateID=${stateID}&serviceTypeID=${serviceTypeID}`
    );
  }
  //zone
  async postZone(post) {
    return this.httpClient.post(`${this.basePath}/utility/zones.json`, post);
  }
  //zipCode
  async getZipCode(zip) {
    return this.httpClient.get(`${this.basePath}/zipCode/${zip}.json`);
  }
  //serviceType
  async getServiceType() {
    return this.httpClient.get(`${this.basePath}/serviceTypes.json`);
  }
  //RateClass
  async postRateClass(post) {
    return this.httpClient.post(
      `${this.basePath}/utility/rateClasses.json?`,
      post
    );
  }
  //Rate
  async getRate(
    serviceTypeID,
    utilityID,
    zipCode,
    stateID,
    rateClass,
    usage,
    zone,
    agentID,
    effectiveDate,
    baseRate
  ) {
    var rate = `${this.basePath}rates.json?serviceTypeID=${serviceTypeID}&utilityID=${utilityID}&zipCode=${zipCode}&stateID=${stateID}&rateClass=${rateClass}&usage=${usage}&zone=${zone}`;
    if (agentID != undefined) {
      rate = rate + `&agentID=${agentID}`;
    }
    if (effectiveDate != undefined) {
      rate = rate + `&effectiveDate=${effectiveDate}`;
    }
    if (baseRate != undefined) {
      rate = rate + `&baseRate=${baseRate}`;
    }
    return this.httpClient.get(rate);
  }
}
