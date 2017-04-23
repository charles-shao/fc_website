class Ability
  include CanCan::Ability

  def initialize(user)
    # Default to guest role permissions
    if user.role.nil?
      can [:edit, :update], User
    elsif user.role.admin?
      can :manage, :all
    elsif user.role.static_lead?
      can :manage, Static
      can :manage, StaticCharacter
      can :manage, StaticProgression
      can :manage, UserApplication
    elsif user.role.member?

    elsif user.role.guest?
      can [:edit, :update], User
    end
  end

end
