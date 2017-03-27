class RaidContentsController < ApplicationController

    def index
      @raid_contents = RaidContent.all
    end

    def new
      @raid_content = RaidContent.new
    end

    def create
      @raid_content = RaidContent.new(raid_content_params)

      if @raid_content.save
        flash[:success] = "Successfully added raid content."
        redirect_to raid_contents_path
      else
        flash[:danger] = @raid_content.errors.full_messages.to_sentence
        render :new
      end
    end

    def edit
      @raid_content = RaidContent.find_by(id: params[:id])
    end

    def update
      @raid_content = RaidContent.find_by(id: params[:id])

      if @raid_content.update_attributes(raid_content_params)
        flash[:success] = "Successfully updated raid content."
        redirect_to raid_contents_path
      else
        flash[:danger] = @raid_content.errors.full_messages.to_sentence
        render :edit
      end
    end

    def destroy
      @raid_content = RaidContent.find_by(id: params[:id])

      if @raid_content.destroy
        flash[:success] = "Successfully deleted raid content."
      else
        flash[:danger] = @raid_content.errors.full_messages.to_sentence
      end

      redirect_to raid_contents_path
    end

    private

      def raid_content_params
        params.require(:raid_content).permit(:name, :patch, :released_at, :image_file)
      end

end
