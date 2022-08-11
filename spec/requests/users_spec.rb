require 'rails_helper'

RSpec.describe "Users", type: :request do
  describe "GET /create" do
    it "returns http success" do
      get "/users/create"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /destroy" do
    it "returns http success" do
      get "/users/destroy"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /me" do
    it "returns http success" do
      get "/users/me"
      expect(response).to have_http_status(:success)
    end
  end

end
