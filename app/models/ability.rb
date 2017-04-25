class Ability
  include CanCan::Ability

  def initialize(user)
    # Default to guest role permissions
    if user.role.nil?
      can [:update], User, id: user.id
    elsif user.role.admin?
      can :manage, :all
    elsif user.role.static_lead?
      can :manage, Static
      can :manage, StaticCharacter
      can :manage, StaticProgression
      can :manage, UserApplication
    elsif user.role.member?
      can [:update], User, id: user.id
    elsif user.role.guest?
      can :update, User, id: user.id
    end
  end

end
